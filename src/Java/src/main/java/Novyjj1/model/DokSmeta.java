package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: ДокСмета
 */
@Entity(name = "IISNovyjj1ДокСмета")
@Table(schema = "public", name = "ДокСмета")
public class DokSmeta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ОбщСметСт")
    private Float общсметст;

    @Column(name = "НомСмеРас")
    private Integer номсмерас;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprKontrag")
    @Convert("SprKontrag")
    @Column(name = "СпрКонтраг", length = 16, unique = true, nullable = false)
    private UUID _sprkontragid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprKontrag", insertable = false, updatable = false)
    private SprKontrag sprkontrag;

    @OneToMany(mappedBy = "doksmeta", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHSmety> tchsmetys;


    public DokSmeta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getОбщСметСт() {
      return общсметст;
    }

    public void setОбщСметСт(Float общсметст) {
      this.общсметст = общсметст;
    }

    public Integer getНомСмеРас() {
      return номсмерас;
    }

    public void setНомСмеРас(Integer номсмерас) {
      this.номсмерас = номсмерас;
    }


}