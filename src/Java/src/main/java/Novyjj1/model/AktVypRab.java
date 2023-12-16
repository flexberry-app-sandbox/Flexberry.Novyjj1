package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

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