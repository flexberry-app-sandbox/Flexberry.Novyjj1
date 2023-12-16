package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ДокУсловДог
 */
@Entity(name = "IISNovyjj1ДокУсловДог")
@Table(schema = "public", name = "ДокУсловДог")
public class DokUslovDog {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Объем")
    private Float объем;

    @Column(name = "ДатаОконч")
    private Date датаоконч;

    @Column(name = "Длительн")
    private Integer длительн;

    @Column(name = "ДатаНач")
    private Date датанач;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatura")
    @Convert("Nomenklatura")
    @Column(name = "Номенклатура", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatura", insertable = false, updatable = false)
    private Nomenklatura nomenklatura;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprKontrag")
    @Convert("SprKontrag")
    @Column(name = "СпрКонтраг", length = 16, unique = true, nullable = false)
    private UUID _sprkontragid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprKontrag", insertable = false, updatable = false)
    private SprKontrag sprkontrag;


    public DokUslovDog() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getОбъем() {
      return объем;
    }

    public void setОбъем(Float объем) {
      this.объем = объем;
    }

    public Date getДатаОконч() {
      return датаоконч;
    }

    public void setДатаОконч(Date датаоконч) {
      this.датаоконч = датаоконч;
    }

    public Integer getДлительн() {
      return длительн;
    }

    public void setДлительн(Integer длительн) {
      this.длительн = длительн;
    }

    public Date getДатаНач() {
      return датанач;
    }

    public void setДатаНач(Date датанач) {
      this.датанач = датанач;
    }


}