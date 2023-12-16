package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: АктВыпРаб
 */
@Entity(name = "IISNovyjj1АктВыпРаб")
@Table(schema = "public", name = "АктВыпРаб")
public class AktVypRab {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ОбщСтоим")
    private Float общстоим;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprKontrag")
    @Convert("SprKontrag")
    @Column(name = "СпрКонтраг", length = 16, unique = true, nullable = false)
    private UUID _sprkontragid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprKontrag", insertable = false, updatable = false)
    private SprKontrag sprkontrag;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatura")
    @Convert("Nomenklatura")
    @Column(name = "Номенклатура", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatura", insertable = false, updatable = false)
    private Nomenklatura nomenklatura;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprSotr")
    @Convert("SprSotr")
    @Column(name = "СпрСотр", length = 16, unique = true, nullable = false)
    private UUID _sprsotrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprSotr", insertable = false, updatable = false)
    private SprSotr sprsotr;

    @OneToMany(mappedBy = "aktvyprab", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHAkt> tchakts;


    public AktVypRab() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getОбщСтоим() {
      return общстоим;
    }

    public void setОбщСтоим(Float общстоим) {
      this.общстоим = общстоим;
    }


}